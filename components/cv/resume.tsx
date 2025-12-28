'use client'

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import SmallBlog from './smallblog/smallBlog'
import EducationCard from '../education/educatioCard';
import Statement from './statement/statement';





import { Container } from './container/container'
import { DiamondIcon } from './diamondIcon/diamondIcon'
import andrewGreeneImage from '../../public/imagesresume/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '../../public/imagesresume/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '../../public/imagesresume/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '../../public/imagesresume/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '../../public/imagesresume/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '../../public/imagesresume/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '../../public/imagesresume/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '../../public/imagesresume/avatars/heather-terry.jpg'
import ibrahimFraschImage from '../../public/imagesresume/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '../../public/imagesresume/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '../../public/imagesresume/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '../../public/imagesresume/avatars/parker-johnson.jpg'
import piersWilkinsImage from '../../public/imagesresume/avatars/piers-wilkins.jpg'
import richardAstley from '../../public/imagesresume/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '../../public/imagesresume/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '../../public/imagesresume/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '../../public/imagesresume/avatars/steven-mchail.jpg'
import waylonHydenImage from '../../public/imagesresume/avatars/waylon-hyden.jpg'

const days = [
  {
    tabName: 'statement',
    name: 'Personal Statement',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: parkerJohnsonImage,
      },
    ],
  },
  {    
     tabName: 'education',
    name: 'Education',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: giordanoSagucioImage,
      },
    ],
  },
  { tabName: 'smallblog',
    name: 'Technical & Training Experience ',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: richardAstley,
      },
    ],
  },
]
//const day = days.map((day) => {
//   return day
//})

   


//let article= articles.map((article:ArticleWithSlug) => (
//    <Article key={article.slug} article={article} />
//  ))
/*
async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../app/articles/rewriting-the-cosmos-kernel-in-rust/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  }

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}
*/

  function Resume() {
    const [gameTab, setGame] = useState<string>('statement');

     const handleTabe = (
      gameTab:string
      
      ): void => {
        setGame(gameTab);
      }
        
      const renderGreeting = () => {
        switch (gameTab) {
            case "statement":
                return <Statement/>;
            case "education":
                return <EducationCard/>;
            case "smallblog":
                return <SmallBlog/>;
            default:
                return <h1>Hello!</h1>;
        }
    };
  


 /* useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch articles');
        setLoading(false);
      }
    };

    fetchArticles();
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, []); 
  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!articles.length) return <div>No articles found</div>;*/

  return (
    
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="w-screen px-[10px]"
    >
      {/* <ImageClipPaths id={id} /> */}
      <Container id="resume-container" className=" max-w-full">
          <div className="w-full rounded-3xl border border-sky-100/70 bg-gradient-to-br from-white via-sky-50 to-emerald-50 p-6 px-4 shadow-lg ring-1 ring-sky-100/70 backdrop-blur sm:p-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl lg:mx-0">
              <h2
              id="speakers-title"
              className="font-display text-4xl font-medium tracking-tighter text-blue-700 sm:text-5xl"
              >
              MY CV
              </h2>
              <p className="mt-3 font-display text-xl tracking-tight text-slate-800 sm:text-2xl">
              This section is about my college and web development CV.
              </p>
            </div>

          <Tab.Group
            as="div"
            className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-2 lg:mt-24 lg:grid-cols-4"
            vertical={false}
          >
            <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
              <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
              <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
                {({ selectedIndex }) => (
                  <>
                    {days.map((day, dayIndex) => (
                      <div onClick={()=>{handleTabe(day.tabName)}} key={dayIndex} className="relative lg:pl-8">
                        <DiamondIcon
                          className={clsx(
                            'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block',
                            dayIndex === selectedIndex
                              ? 'fill-blue-600 stroke-blue-600'
                              : 'fill-transparent stroke-slate-400',
                          )}
                        />
                        <div className="relative">
                          <div
                            className={clsx(
                              'font-mono text-sm overflow-hidden',
                              dayIndex === selectedIndex
                                ? 'text-blue-600'
                                : 'text-slate-500',
                            )}
                          >
                            <Tab  className="ui-not-focus-visible:outline-none block max-w-[220px] truncate text-left">
                              <span className="absolute right-0 bottom-0" />
                              {day.name}                     
                            </Tab>
                          </div>
                          <time
                            dateTime={day.dateTime}
                            className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                          >
                            {day.date}
                          </time>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </Tab.List>
            </div>
            <Tab.Panels className="lg:col-span-3 lg:pl-10">
            
        
                   {renderGreeting()}

                {/*    {articles.map((article:ArticleMatter,articleIndex) => {
                             

                          return (    
                          <div key={article.slug}>
                            <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                              <div
                                className={clsx(
                                  'absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                                  [
                                    'border-blue-300',
                                    'border-indigo-300',
                                    'border-sky-300',
                                  ][articleIndex % 4],
                                )}
                              />
                              <div
                                className="absolute inset-0 bg-indigo-50"
                                style={{ clipPath: `url(#${id}-${articleIndex % 4})` }}
                              >
                               <Article key={article.slug} article={article} />  

                              </div>

                            </div>
                            

                          </div>

                          )
              })}

                  
                  */}
            
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Container>
    </section>
  )
}

 
export default Resume;