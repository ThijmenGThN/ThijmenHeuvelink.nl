
import { createSharedPathnamesNavigation } from 'next-intl/navigation'


export const locales = ['nl', 'en'] as const


export const defaultLocale = 'nl'
export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix })
