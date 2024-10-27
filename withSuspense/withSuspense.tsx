import { Suspense, ComponentType, ReactNode } from 'react'

function withSuspense<P>(
  Component: ComponentType<P>,
  fallback: ReactNode = <div>Loading...</div>
) {
  return (props: P) => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )
}

export default withSuspense
