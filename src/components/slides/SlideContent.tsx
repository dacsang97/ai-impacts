import { Slide0 } from "./Slide0";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
import { Slide4 } from "./Slide4";
import { Slide5 } from "./Slide5";
import { Slide6 } from "./Slide6";
import { Slide7 } from "./Slide7";
import { Slide8 } from "./Slide8";
import { Slide9 } from "./Slide9";
import { Slide10 } from "./Slide10";
import { Slide11 } from "./Slide11";
import { Slide12 } from "./Slide12";
import { Slide13 } from "./Slide13";
import { Slide14 } from "./Slide14";
import { Slide15 } from "./Slide15";
import { Slide16 } from "./Slide16";
import { Slide51 } from "./Slide51";
import { Slide52 } from "./Slide52";
import { Slide53 } from "./Slide53";
import { Slide101 } from "./Slide101";
import { Slide102 } from "./Slide102";
import { Slide103 } from "./Slide103";
import { Slide104 } from "./Slide104";

interface SlideContentProps {
	slideNumber: number;
}

export const SlideContent = ({ slideNumber }: SlideContentProps) => {
	// For now, let's render based on slide number
	switch (slideNumber) {
		case 0:
			return <Slide0 />;
		case 1:
			return <Slide1 />;
		case 2:
			return <Slide2 />;
		case 3:
			return <Slide3 />;
		case 4:
			return <Slide4 />;
		case 5:
			return <Slide5 />;
		case 6:
			return <Slide6 />;
		case 7:
			return <Slide7 />;
		case 8:
			return <Slide8 />;
		case 9:
			return <Slide9 />;
		case 10:
			return <Slide10 />;
		case 10.1:
			return <Slide101 />;
		case 10.2:
			return <Slide102 />;
		case 10.3:
			return <Slide103 />;
		case 10.4:
			return <Slide104 />;
		case 11:
			return <Slide11 />;
		case 12:
			return <Slide12 />;
		case 13:
			return <Slide13 />;
		case 14:
			return <Slide14 />;
		case 15:
			return <Slide15 />;
		case 16:
			return <Slide16 />;
		case 5.1:
			return <Slide51 />;
		case 5.2:
			return <Slide52 />;
		case 5.3:
			return <Slide53 />;
		default:
			return (
				<div className="min-h-screen flex items-center justify-center bg-gray-50">
					<div className="text-center">
						<h1 className="text-4xl font-bold text-gray-900 mb-4">
							Slide {slideNumber}
						</h1>
						<p className="text-xl text-gray-600 mb-4">
							Nội dung đang phát triển...
						</p>
						<p className="text-gray-500">
							Slide này sẽ sớm được hoàn thiện với nội dung chi tiết.
						</p>
					</div>
				</div>
			);
	}
};
