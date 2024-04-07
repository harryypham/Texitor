import { NextRequest, NextResponse } from 'next/server'

// run only on homepage
export const config = {
  matcher: '/',
}
export async function middleware(req : NextRequest) {
    const { nextUrl: url, geo } = req
    if (geo === undefined) {
        throw new Error("Location undefined")
    }
    const country = geo.country || 'US'
  
    url.searchParams.set('country', country)
  
    return NextResponse.rewrite(url)
  }