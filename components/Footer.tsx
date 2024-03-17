import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Link href={`mailto:${siteMetadata.email}`}>email</Link>
          <Link href={siteMetadata.twitter}>twitter</Link>
          <Link href={siteMetadata.github}>github</Link>
          <Link href={siteMetadata.linkedin}>linkedin</Link>
          <Link href={siteMetadata.gumroad}>workflow</Link>
          <Link href={siteMetadata.soundcloud}>soundcloud</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400"></div>
      </div>
    </footer>
  )
}
