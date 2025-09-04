import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { SocialDivider } from "./social-divider"
import { SocialLoginButtons } from "./social-login-buttons"

interface AuthFormLayoutProps {
  title: string
  description: string
  error?: string | null
  children: React.ReactNode
  footerContent?: React.ReactNode
}

export function AuthFormLayout({
  title,
  description,
  error,
  children,
  footerContent,
}: AuthFormLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {children}
        </CardContent>

        <CardFooter className="flex-col gap-4">
          <SocialDivider />
          <SocialLoginButtons />
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  )
}
