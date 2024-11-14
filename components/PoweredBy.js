import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div
      className={`gap-x-1 flex flex-wrap text-sm font-serif ${props.className}`}>
      <span>Powered by</span>
      <a
        href='https://xlearn.shop'
        className='underline justify-start'>
        CharliiAI {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
