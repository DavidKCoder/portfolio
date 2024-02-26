import React from "react";
import Link from 'next/link';
import { Button } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';

export default function Custom404() {
  return (
    <div className="not-found">
      <h1><span className="e-404 animated-404">404</span> Page Not Found</h1>
      <Link href="/">
        <Button appearance="ghost" startIcon={<HomeIcon/>}>
          Go to Home
        </Button>
      </Link>
    </div>
  )
}