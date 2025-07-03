import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide12 = () => {
	return (
		<SlideLayout
			title="Tổ Chức Cần Thay Đổi Gì?"
			subtitle="AI không chỉ thay đổi cách chúng ta code, mà còn đòi hỏi văn hóa tổ chức, quy trình và mindset mới."
			className="bg-gray-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				11. AI Cần Gì Từ Tổ Chức?
			</div>

			<div className="mt-16 grid md:grid-cols-2 gap-8">
				<div className="space-y-6">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							🔄 Thay đổi quy trình
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Code review tập trung vào logic thay vì syntax</li>
							<li>• Thiết kế hệ thống trở nên quan trọng hơn</li>
							<li>• Testing strategy phải adapt với AI-generated code</li>
							<li>• Continuous learning về AI tools</li>
						</ul>
					</Card>

					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							💰 Đầu tư vào công cụ
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• License cho AI coding assistants</li>
							<li>• Training teams về prompt engineering</li>
							<li>• Infrastructure cho AI workflows</li>
							<li>• Security compliance cho AI tools</li>
						</ul>
					</Card>
				</div>

				<div className="space-y-6">
					<Card>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							🧠 Mindset mới
						</h3>
						<ul className="space-y-2 text-gray-700">
							<li>• Từ "hoàn hảo từ đầu" sang "iterate nhanh"</li>
							<li>• Từ "coder" sang "problem solver"</li>
							<li>• Từ "làm việc một mình" sang "collaborate với AI"</li>
							<li>• Embrace uncertainty và thử nghiệm</li>
						</ul>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							⚡ Yếu tố then chốt
						</h3>
						<div className="space-y-3">
							<p className="font-semibold text-teal-600">
								Psychological Safety
							</p>
							<p className="text-sm text-gray-600">
								Người ta cần cảm thấy an toàn khi thử nghiệm, thất bại, và học
								hỏi với AI.
							</p>
							<p className="font-semibold text-orange-600">Speed of Learning</p>
							<p className="text-sm text-gray-600">
								Tổ chức học và adapt nhanh với AI tools sẽ có lợi thế cạnh tranh
								lớn.
							</p>
						</div>
					</Card>
				</div>
			</div>

			<blockquote className="mt-8 text-lg italic text-gray-500 border-l-4 border-orange-500 pl-4 text-center">
				"Tổ chức nào adapt AI nhanh nhất sẽ có lợi thế cạnh tranh lớn trong 2-3
				năm tới."
			</blockquote>
		</SlideLayout>
	);
};
