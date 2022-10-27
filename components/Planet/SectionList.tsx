interface ISectionList {
  data: string[],
  tittle: string
}
const SectionList = ({ data, tittle }: ISectionList) => {
  return (
    <div className="sm:col-span-1">
      {data.length &&  <dt className="text-sm font-medium text-gray-500">{tittle}</dt>}
      <dd className="mt-1 text-sm text-gray-900">
        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
          {data?.map((item, i) => (
            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm" key={i}>
              <div className="flex w-0 flex-1 items-center">
                <span className="ml-2 w-0 flex-1 truncate">{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </dd>
    </div>
  )
}
export default SectionList