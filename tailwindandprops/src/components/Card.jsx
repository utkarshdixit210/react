import React from 'react'

function Card(props) {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29208521/pexels-photo-29208521/free-photo-of-charming-vintage-tram-in-milan-on-a-sunny-day.jpeg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {props.username}
      </div>
      <div>
        {props.city}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card
