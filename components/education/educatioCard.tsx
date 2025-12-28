import React from 'react'
import myUniversity from '../../assets/myUniversity.jpeg'
import myInstitute from '../../assets/myInstitute.png'

const posts = [
    {
      id: 1,
      title: 'Bachelor of Computer Engineering',
      href: '#',
      description:
        '  Ranked 2nd in Class during both junior and senior years(2018-2020)',
      imageUrl: myUniversity.src,
      date: 'June, 2020',
      datetime: '2020-03-16',
      category: { title: 'Faculty of Engineering & Information Technology ', href: '#' },
      author: {
        name: 'University of Modern Sciences',
        role: 'Bagdad Street, Sanaa, Yemen ',
        href: '#',
      imageUrl: myUniversity.src,
      },
    },
    {
        id: 2,
        title: 'TOEFL IBT Graduatoin Certificate',
        href: '#',
        description:
          'Studied at Amidest & multiple institutes during and after high school',
        imageUrl: myInstitute.src,
        date: 'Mar, 2012',
        datetime: '2020-03-16',
        category: { title: 'Amedist Institute', href: '#' },
        author: {
          name: 'Amedist',
          role: 'Bagdad Street, Sanaa, Yemen ',
          href: '#',
      imageUrl: myInstitute.src,
         },
    },
    
     
    // More posts...
  ]
  
 const EducationCard = () => {
  return (
   
          <div className="mt-16 space-y-20 divide-y divide-sky-200 lg:mt-20 lg:space-y-20">

                {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-15 lg:flex-row">
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
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm/6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

   
  )
}
export default EducationCard;
