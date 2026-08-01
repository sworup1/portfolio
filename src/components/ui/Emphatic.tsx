import type { EmphaticSegment } from '../../data/portfolio'

interface EmphaticProps {
  segments: EmphaticSegment[]
}

export function Emphatic({ segments }: EmphaticProps) {
  return (
    <>
      {segments.map((segment, index) => (
        <span key={index} className={segment.italic ? 'emphatic' : undefined}>
          {segment.text}
        </span>
      ))}
    </>
  )
}
