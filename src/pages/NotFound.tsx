import Button from '../components/Button'
import { ArrowRight } from '../components/icons'

export default function NotFound() {
  return (
    <main className="relative grid min-h-[88vh] place-items-center overflow-hidden bg-bg px-6 pt-32 text-center">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[40vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/12 blur-[130px]"
      />
      <div className="relative">
        <p className="text-iris text-[7rem] font-bold leading-none tracking-tightest sm:text-[11rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-heading">Page not found</h1>
        <p className="mt-2 text-body">
          The page you're looking for has drifted out of orbit.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  )
}
