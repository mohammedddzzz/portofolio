import React from 'react'
import udemy from '../../../assets/udemy.jpg'
const posts = [
    {
      id: 1,
      title: ' BUILD THE BEST ECOMMERCE WEBSITE EVER with REACT JS NEXT JS',
      href: '#',
      description:
        ' Applaying the application of the instructore to get the marvilous experince of developing ecommerce websites, enhance react.js and next.js experience ,and updating the instructor application.  ',  
      imageUrl: udemy.src,
      date: '11/2024 (Current)',
      datetime: '2020-03-16',
      category: { title: 'Full-Stack', href: '#' },
      author: {
        name: 'Udemy, online',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Building a Full-stack Multilingual Blog with Next.js 13.4',
        href: '#',
        description:
          'Applaying the application of the instructor to get excellent experince of eveloping ,  blog websites , enhance react.js and next.js experience ,and updating the instructor application.  ',  
          
           
        imageUrl: udemy.src,
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Full-Stack', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
         },
    },
    
  ]
  
 const SingCard = () => {
  return (
   
            <div className="mt-5 space-y-20 pb-5 sm:divide-y sm:divide-gray-900/20  sm:pb-5 lg:mt-20 lg:space-y-20">

                {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 divide-y divide-gray-900/20 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                    </div>
                  
                  </div>
                </article>
              ))}
            </div>

   
  )
}
export default SingCard;
