import Canvas from '@/components/canvas'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Reach Sketch Canvas</h1>
        <p className='text-sm text-muted-foreground'>
          Freehand vector drawing for React using SVG as canvas
        </p>

        <Canvas />
      </div>
    </section>
  )
}
