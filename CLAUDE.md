# Project Brief

In this challenge, you will develop a card featuring a user testimonial, including a profile image, name, username, and the testimonial body.

# Implementation Requirements

- **Design fidelity:** Aim to follow the design as closely as possible. All elements in the design should be present, using the specified text color, font size, font weight, spacing, dimensions, etc.
- **Cross-browser compatibility:** Check that your solution works for major browsers including Chrome, Firefox and Safari.
- **[Stretch goal] Handle long strings:** In reality, the person's name and testimonial can be extremely long. The UI should be able to accommodate extremely long strings by either wrapping to the next line, truncating, or both.
- **[Stretch goal] Performance optimization:** Optimize image assets and code for quick load times, ensuring a smooth and responsive user experience.
- **[Stretch goal] Accessibility and semantics:** Follow best practices for web accessibility, such as using semantic HTML and ARIA roles where necessary and using proper alt tags for images.

# Notes

## Tailwind CSS v4 source detection

The `@tailwindcss/vite` plugin auto-detects utility classes via a filesystem scanner (Oxide). No `@source` directives are needed. If classes aren't being generated (especially for newly created files), clear the Vite cache with `rm -rf node_modules/.vite`. This is a known edge case when running `vite build` without a persistent dev server — the `vite dev` watcher handles new files automatically.
