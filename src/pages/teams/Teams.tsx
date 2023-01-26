import React from 'react';
import OurTestimonials from './our-testimonials/OurTestimonials';
import SectionAssistance from './section-assistance/Section-Assistance';
import SectionOurTeam from './section-our-team/SectionOurTeam';
import VideoTour from './video-tour/VideoTour';
import { ButtonOnTop } from '../../components/button-ontop';
const Teams = () => {
    return (
        <>
            <SectionOurTeam />
            <SectionAssistance />
            <VideoTour />
            <OurTestimonials />
            <ButtonOnTop />
        </>
    );
};
export default Teams;
