import * as React from 'react'
import { cn } from '@lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const describedBy = id && (error || helperText) ? `${id}-${error ? 'error' : 'helper'}` : undefined
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
            {label}{required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-destructive focus-visible:ring-destructive',
            className
          )}
          ref={ref}
          id={id}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...props}
        />
        {error && id && <p id={`${id}-error`} className="mt-1 text-sm text-destructive">{error}</p>}
        {helperText && !error && id && <p id={`${id}-helper`} className="mt-1 text-sm text-muted-foreground">{helperText}</p>}
      </div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }