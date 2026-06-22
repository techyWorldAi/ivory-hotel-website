type Props = {
  className?: string
}

/** The crescent moon mark from the Ivory wordmark — reused as the page's signature motif. */
export default function CrescentMark({ className = 'w-8 h-8' }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M62 8C40 14 26 34 26 56c0 22 14 38 33 42-26 4-49-15-49-44C10 25 33 4 62 8Z"
        fill="currentColor"
      />
    </svg>
  )
}
