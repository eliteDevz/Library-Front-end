
import detailsImage from '../../assets/images/detailsImage.jpg'
const BookDetails = () => {
  return (

    <div className='h-[20vh] w-[60vw] text-[0.8rem] mx-auto p-[5%]  text-gray-700 '>

      <div className='flex flex-cols-2 gap-4'>

        <div className=''>
          <img className='w-[100%] h-full' src={detailsImage} alt="" srcSet="" />
        </div>

        <div>
          <h1 className='text-3xl font-bold '>The Gods Are Not To Blame</h1>
          <span>by</span><span className='font-bold '>  OLA ROTIMI</span>

          <p className='pt-[5%]'>The Gods Are Not To Blame is a 1968 play and a 1971 novel by Ola Rotimi. An adaptation of the Greek classic Oedipus Rex, the story centres on Odewale, who is lured into a false sense of security, only to somehow get caught up in a somewhat consanguineous trail of events by the gods of the land. </p>
          <p className='pt-[5%]'>
            The novel is set in an indeterminate period of a Yoruba kingdom. This reworking of Oedipus Rex was part of the African Arts (Arts d'Afrique) playwriting contest in 1969. Rotimi's play has been celebrated on two counts: at first scintillating as theatre and later accruing a significant literary aura.This article focuses specifically on the 1968 play. </p>


          <div className='flex flex-col-4 gap-9 justify-center pt-[10%]'>

        <div>
          <h6 className='font-bold' >Language</h6>
          <h6 className='font-bold'>Publisher </h6>
          <h6 className='font-bold'>Published date </h6>
          
        </div>


        <div>
          <h6>English</h6>
          <h6> Oxford University Press</h6>
          <h6>1971</h6>
          
        </div>


        <div>
        <h6 className='font-bold'>Pages</h6>
        <h6 className='font-bold'>Genre</h6>

        </div>

       

        <div>
        <h6 >72pp</h6>
        <h6>Tragedy</h6>

        </div>

        </div>


        </div>

      </div>


      
    




      



      </div>

      )
}

      export default BookDetails;