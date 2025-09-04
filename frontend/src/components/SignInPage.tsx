import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { signInSchema, type SignInFormData } from '../lib/validations'
import { loginUser, clearError } from '../store/authSlice'
import type { RootState, AppDispatch } from '../store'
import { AuthFormLayout, InputField } from './auth-form'

export function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    // Clear error when component mounts
    dispatch(clearError())
  }, [dispatch])

  const onSubmit = async (data: SignInFormData) => {
    dispatch(loginUser(data))
  }

  return (
    <AuthFormLayout
      title="Sign in to your account"
      description="Welcome back! Please sign in to continue."
      error={error}
      footerContent={
        <div className="text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/signup" className="text-gray-900 hover:underline font-medium underline-offset-4">
            Sign up
          </Link>
        </div>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <InputField
          id="email"
          label="Email"
          type="email"
          icon={Mail}
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register('email')}
        />

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Password</span>
            <a
              href="#"
              className="text-sm text-gray-900 hover:underline underline-offset-4"
            >
              Forgot password?
            </a>
          </div>
          <InputField
            id="password"
            label=""
            type={showPassword ? "text" : "password"}
            icon={Lock}
            placeholder="Enter your password"
            error={errors.password?.message}
            rightElement={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            }
            {...register('password')}
          />
        </div>

        {/* Sign In Button */}
        <Button 
          type="submit" 
          className="w-full h-12 bg-black hover:bg-gray-800"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </AuthFormLayout>
  )
}
