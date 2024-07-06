import React from 'react'
import ReferralInfoCard from './referal-info-card';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";
import Button from '../../../../../components/button/button';
import { useReferalModal } from '../../../../../hooks/useReferalModal';


const ReferralInfo = () => {

  const {onOpen} = useReferalModal()

  return (
    <div className='w-full mx-auto bg-transparent  min-h-[60vh] py-10 px-2'>
        <div className='w-full flex flex-col gap-y-20 backdrop-filter backdrop-blur-lg bg-[url("")] py-5'>
        <h1 className='text-center font-bold text-4xl '>What happens <span className='text-blue-500'>Next?</span></h1>
        
        <div className='flex  md:flex-row md:gap-y-0 gap-y-10 flex-col items-center gap-x-10  text-gray-700 text-sm justify-between w-full h-full p-5 max-w-[85rem] mx-auto'>
                <ReferralInfoCard icon={<TbCircleNumber1 className="w-14 h-14 text-blue-600" />} title={"Send Email"} description={"We'll send an email to your friend with your code"}/>
                <ReferralInfoCard icon={<TbCircleNumber2 className="w-14 h-14 text-blue-600"/>} title={"Get Notified"} description={"You will receive an email notification once your friend is approved"}/>
                <ReferralInfoCard icon={<TbCircleNumber3 className="w-14 h-14 text-blue-600"/>} title={"Win Bonuses"} description={"Get a chance to win bonuses upto Rs15000"}/>
        </div>
        <Button onClick={onOpen} className={"mx-auto"} variant='primary'>
            Refer Now
        </Button>
        </div>
        
    </div>
  )
}

export default ReferralInfo