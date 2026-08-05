import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') || '';
  
  // The official URLs for AMA Connect
  const APP_STORE_URL = 'https://apps.apple.com/in/app/ama-legal-solutions/id6755156186';
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions';
  
  // Fallback landing page
  const FALLBACK_URL = new URL('/', req.url);

  // Allow bots to pass through to the fallback page instead of redirecting them blindly
  if (/bot|crawler|spider|crawling/i.test(ua)) {
    return NextResponse.redirect(FALLBACK_URL);
  }

  // Detect iOS devices
  if (/iPhone|iPad|iPod/i.test(ua)) {
    return NextResponse.redirect(APP_STORE_URL);
  }
  
  // Detect Android devices
  if (/Android/i.test(ua)) {
    return NextResponse.redirect(PLAY_STORE_URL);
  }
  
  // Desktop / Unknown -> go to fallback
  return NextResponse.redirect(FALLBACK_URL);
}

export const config = {
  matcher: '/get',
};
