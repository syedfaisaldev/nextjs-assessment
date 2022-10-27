interface ISectionProps {
  tittle: string,
  value: string
}
const Section = ({ tittle, value }: ISectionProps) => {
  return (
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">{tittle}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  )
}
export default Section;