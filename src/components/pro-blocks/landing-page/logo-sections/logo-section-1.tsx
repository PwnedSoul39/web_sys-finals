"use client";

import { PlaceholderLogo } from "~/components/pro-blocks/placeholder-logo"; /* Make sure to import your logos */
import { Tagline } from "~/components/pro-blocks/landing-page/tagline";

export function LogoSection1() {
  return (
    <section className="bg-gray-900 section-padding-y">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <h2 className="heading-lg text-foreground">
              Trusted by Top Guilds and Game Developers
            </h2>
            <p className="text-muted-foreground">
              Join the ranks of the most successful players, studios, and communities using our platform to level up.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
