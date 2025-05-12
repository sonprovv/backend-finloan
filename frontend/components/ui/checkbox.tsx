import * as React from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      className="h-4 w-4 rounded border border-gray-300 text-primary focus:ring-2 focus:ring-primary"
      {...props}
    />
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
