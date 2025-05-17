import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from '../feature'
import Article from '../article'
import { ArrowUpDown, Timer, Workflow } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <Article
        element={
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Information you need during on-call emergencies
          </Typography>
          <Typography className="max-w-2xl" variant="h5">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Link
            href="/products"
            target=""
          >
            <Button size="tiny" variant="ghost">
              {`Get Started`}
            </Button>
          </Link>
        </div>
      }>
      </Article>
      <Image
          width={1024}
          height={632}
          alt="Frescura Home image"
          src="/frescura/opengraph-image.jpg"
      />
      <Article
      element={
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Quick solutions, less stress
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Fix emergencies fast"
              description="Save 20-30 minutes per on-call ticket - no more searching for relevant issues and runbooks"
            />
            <Feature
              icon={<ArrowUpDown size={24} />}
              headline="Universally compatible"
              description="Works with PagerDuty, Jira, or custom Slack alerts—Pandem integrates with any system"
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Secure for your org"
              description="We keep your data safe by taking top security measures."
            />
          </div>
        </div>
      }>
      </Article>
      <Article
      element={
        <div className="flex flex-col gap-6 max-w-full items-center">
          <Typography className="max-w-full" variant="h1">
            Instant setup, no custom code
          </Typography>
          <Typography className="max-w-full" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
        </div>
      }>
      </Article>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <Image
            width={1024}
            height={632}
            alt="Frescura salad image"
            src="/frescura/saladbackground.png"
          />
      </div>
    </div>
  )
}
