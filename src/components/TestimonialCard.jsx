function TestimonialCard({ name, username, testimonial, avatarUrl, avatarAlt }) {
  return (
    <article
      className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full"
      aria-label={`Testimonial from ${name}`}
    >
      <header className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={avatarAlt || `${name}'s profile photo`}
          className="w-12 h-12 rounded-full object-cover shrink-0"
          width={48}
          height={48}
          loading="lazy"
        />
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-neutral-900 leading-tight truncate">
            {name}
          </h2>
          <p className="text-sm text-neutral-500 leading-tight truncate">
            @{username}
          </p>
        </div>
      </header>
      <blockquote className="mt-4 text-base text-neutral-600 leading-relaxed">
        <p>{testimonial}</p>
      </blockquote>
    </article>
  );
}

export default TestimonialCard;
