export default function Certificate({course, platform, image, link}: {course: string, platform: string, image: string, link: string}) {
    return(
        <div className="col-12 col-md-5 rounded-3 glassmorph-bg pls">
            <a href={link} target="_blank" className="text-decoration-none text-white">
                <div className="justify-content-center align-items-center text-center p-3 glassmorp-card">
                    <img src={image} alt="Course" className="w-100 rounded-3"/>
                    <h3 className="text-center mt-2"><span className="gradient-3">{course}</span></h3>
                    <span className="fs-5">From <span className="gradient-1">{platform}</span></span>
                </div>
            </a>
        </div>
    );
}