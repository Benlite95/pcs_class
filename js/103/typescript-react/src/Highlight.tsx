interface HighlightProps {
  children: React.ReactNode
}
export default function Highlight(props: HighlightProps) {
  return (
    <div style={{backgroundColor: 'red'}}>{props.children}</div>
  )
}
