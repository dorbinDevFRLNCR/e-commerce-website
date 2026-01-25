interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ children, className, variant = 'primary', onClick }: ButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    tertiary: 'bg-green-600 text-white hover:bg-green-700',
  }

  return (
    <button className={`${variantClasses[variant]} ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
