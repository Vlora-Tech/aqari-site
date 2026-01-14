import Image from "next/image";
import { AppStoreButtons, GradientText, DecorativeEllipse } from "../ui";

// Shared content
const HERO_TITLE = "عقارك المثالي..\nأقرب مما تتخيل.";
const HERO_DESC = "تصفـح آلـاف العقـــارات للبيـــع والإيجـــار في الريـــاض، جدة، وجميع مدن المملكة. خرائـط دقيقـة، أسعـــار محدثـــة، وتـواصـــل مباشــــر مع المــالك.";
const BLUE_DESC = "عقاري إكس للخدمات العقارية المتكاملة، لن تعاني بعد الآن من عدم البحث عن أفضل العقارات. ستتمكن من رؤية أفضل الفرص العقارية وبيع العقارات، وبالتالي ستتمكن من اتخاذ قرارات آمنة مدروسة وتحقيق هدفك في الاستثمار بذكاء.";

export default function HeroSection() {
    return (
        <section id="about" className="relative md:h-screen md:max-h-screen overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, #271567 0%, #114195 100%)' }} />

            {/* White Section - Desktop */}
            <div className="absolute inset-x-0 top-0 h-[66.67%] md:h-[50%] bg-white overflow-hidden hidden md:block" style={{ borderBottomLeftRadius: '5%', borderBottomRightRadius: '5%' }}>
                <DecorativeEllipse color="#FDE598" className="w-[360px] h-[190px]" style={{ top: '12px', left: '-114px' }} />
                <DecorativeEllipse color="#80ADE2" className="w-[352px] h-[190px]" style={{ top: '242px', left: '-144px' }} />
            </div>

            <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-6">
                {/* Desktop */}
                <div className="hidden md:flex flex-col h-full relative">
                    <div className="h-[50%] flex items-center justify-between relative z-10">
                        <div className="w-[55%] text-right pl-8">
                            <GradientText as="h1" className="text-[36px] lg:text-[44px] font-black leading-[50px] lg:leading-[60px] mb-4">
                                {HERO_TITLE.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
                            </GradientText>
                            <p className="text-[18px] lg:text-[22px] font-medium leading-[34px] lg:leading-[42px] max-w-[600px] text-justify mb-6" style={{ color: '#252B5C' }}>{HERO_DESC}</p>
                            <AppStoreButtons size="lg" className="justify-start" />
                        </div>
                        <div className="w-[45%] flex justify-center items-end h-full">
                            <div className="relative translate-y-[40%]">
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[30px] bg-black/30 rounded-[50%] blur-2xl" aria-hidden="true" />
                                <Image
                                    src="/Phone Mockups.png"
                                    alt="تطبيق عقار على الهاتف"
                                    width={500}
                                    height={600}
                                    className="relative w-[380px] lg:w-[450px] xl:w-[500px] h-auto drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-[50%] flex items-center relative z-10">
                        <div className="w-[55%] text-right pl-8">
                            <p className="font-medium text-white text-justify text-[18px] lg:text-[22px] leading-[38px] lg:leading-[48px] max-w-[650px]">{BLUE_DESC}</p>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden flex-col">
                    <div className="bg-white px-4 text-center relative z-10" style={{ borderBottomLeftRadius: '5%', borderBottomRightRadius: '5%' }}>
                        <GradientText as="h1" className="text-[24px] sm:text-[30px] font-black leading-[36px] sm:leading-[44px] mb-3">
                            {HERO_TITLE.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
                        </GradientText>
                        <p className="text-[13px] sm:text-[15px] font-medium leading-[22px] sm:leading-[26px] text-center" style={{ color: '#252B5C' }}>{HERO_DESC}</p>
                        <div className="flex justify-center mb-[-182px] sm:mb-[-222px] relative z-20">
                            <Image
                                src="/Phone.png"
                                alt="تطبيق عقار على الهاتف"
                                width={340}
                                height={680}
                                className="w-[80%] max-w-[340px] h-auto"
                                priority
                            />
                        </div>
                    </div>
                    <div className="pt-[182px] sm:pt-[222px]">
                        <div className="flex justify-center"><AppStoreButtons size="sm" className="justify-center" /></div>
                        <p className="px-4 text-center py-6 text-[11px] sm:text-[12px] font-medium text-white leading-[20px] sm:leading-[24px]">{BLUE_DESC}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
