#!/bin/bash

# Check which tools exist (from tools.ts)
echo "=== Tools (from tools.ts - used for /tools/[slug]) ==="
grep "slug:" data/tools.ts | grep -oP '(?<=slug: ")[^"]*' | wc -l
echo "Sample: $(grep 'slug:' data/tools.ts | grep -oP '(?<=slug: ")[^"]*' | head -5 | tr '\n' ', ')"

echo ""
echo "=== Industries (from industries.ts - used for /industries/[slug]) ==="
grep "slug:" data/industries.ts | grep -oP '(?<=slug: ")[^"]*' | sort | uniq

echo ""
echo "=== Stacks (from stacks.ts - used for /stacks/[slug]) ==="
grep "slug:" data/stacks.ts | grep -oP '(?<=slug: ")[^"]*' | sort | uniq | wc -l
echo "Samples: $(grep 'slug:' data/stacks.ts | grep -oP '(?<=slug: ")[^"]*' | head -5 | tr '\n' ', ')"

echo ""
echo "=== Reviewed slugs (from reviews.ts - used for /alternatives/[slug]) ==="
grep "slug:" data/reviews.ts | grep -oP '(?<=slug: ")[^"]*' | sort | uniq | head -10

echo ""
echo "=== Best-For Pages (from best-for.ts - used for /best/[slug]) ==="
sed -n '/export const bestForPages/,/export const/p' data/best-for.ts | grep -E '^\s+\{' -A 1 | grep slug | grep -oP '(?<=slug: ")[^"]*'

