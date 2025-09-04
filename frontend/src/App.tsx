import { Provider, useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { store } from './store'
import type { RootState, AppDispatch } from './store'
import { SignInPage } from "@/components/SignInPage"
import { SignUpPage } from "@/components/SignUpPage"
import { DashboardPage } from "@/components/DashboardPage"
import { fetchUserProfile } from './store/authSlice'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)
  return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />
}

function AppRoutes() {
  const dispatch = useDispatch<AppDispatch>()
  const { isAuthenticated, accessToken, user, isLoading } = useSelector((state: RootState) => state.auth)

  // Initialize user profile on app start if authenticated but no user data
  useEffect(() => {
    if (isAuthenticated && accessToken && !user) {
      dispatch(fetchUserProfile())
    }
  }, [dispatch, isAuthenticated, accessToken, user])

  // Show loading screen while fetching user data
  if (isAuthenticated && !user && isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading user information...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          <PublicRoute>
            <SignInPage />
          </PublicRoute>
        } 
      />
      <Route 
        path="/signup" 
        element={
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        } 
      />
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  )
}

export default App
