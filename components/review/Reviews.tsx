
import ReviewGrid from './reviewsStructures/reviewGrid'
import { Container } from './reviewcontainer/Container'








export function Reviews() {
  return (
     <div> 
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className=""
    >
      <Container>
     
        <ReviewGrid />
      </Container>
    </section>
    </div>
  )
}
