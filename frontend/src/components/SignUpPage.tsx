import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { signUpSchema, type SignUpFormData } from '../lib/validations'
import { signupUser, clearError } from '../store/authSlice'
import type { RootState, AppDispatch } from '../store'
import { AuthFormLayout, InputField } from './auth-form'

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { isLoading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    dispatch(clearError())
  }, [dispatch])

  const onSubmit = async (data: SignUpFormData) => {
    dispatch(signupUser(data))
  }

  return (
    <AuthFormLayout
      title="Create your account"
      description="Please fill in the details to get started."
      error={error}
      footerContent={
        <div className="text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-gray-900 hover:underline font-medium underline-offset-4">
            Sign in
          </Link>
        </div>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <InputField
          id="name"
          label="Name"
          type="text"
          icon={User}
          placeholder="Enter your full name"
          error={errors.name?.message}
          {...register('name')}
        />

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
        <InputField
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          icon={Lock}
          placeholder="Create a password"
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

        {/* Create Account Button */}
        <Button 
          type="submit" 
          className="w-full h-12 bg-black hover:bg-gray-800"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </AuthFormLayout>
  )
}
