import { Card } from "../ui/Card";
import { SlideLayout } from "../ui/SlideLayout";

export const Slide53 = () => {
	return (
		<SlideLayout
			title="AI: Chuyên Gia Test & Tự Động Hóa"
			subtitle="AI xuất sắc trong việc tạo test cases, mô phỏng user scenarios và detect bugs, tiết kiệm 50% thời gian viết test tự động."
			className="bg-orange-50"
		>
			<div className="absolute top-8 left-8 text-lg font-semibold text-gray-700">
				5.3. AI Giúp Ích: Test & Tự Động Hóa
			</div>

			<div className="grid md:grid-cols-2 gap-8 items-center mt-16">
				<Card>
					<h3 className="text-xl font-bold text-gray-800 mb-4">
						🧪 Testing Capabilities của AI
					</h3>
					<div className="space-y-4">
						<div className="bg-orange-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center">
									<span className="text-2xl mr-3">⚡</span>
									<div>
										<h4 className="font-semibold">Unit Tests</h4>
										<p className="text-xs text-gray-600">
											Tạo test cases cho functions
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="w-20 bg-gray-200 rounded-full h-2 mb-1">
										<div
											className="bg-orange-500 h-2 rounded-full"
											style={{ width: "95%" }}
										/>
									</div>
									<span className="text-xs font-semibold">95%</span>
								</div>
							</div>
						</div>

						<div className="bg-orange-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center">
									<span className="text-2xl mr-3">🔗</span>
									<div>
										<h4 className="font-semibold">Integration Tests</h4>
										<p className="text-xs text-gray-600">
											Test API endpoints & workflows
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="w-20 bg-gray-200 rounded-full h-2 mb-1">
										<div
											className="bg-orange-500 h-2 rounded-full"
											style={{ width: "85%" }}
										/>
									</div>
									<span className="text-xs font-semibold">85%</span>
								</div>
							</div>
						</div>

						<div className="bg-orange-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center">
									<span className="text-2xl mr-3">👤</span>
									<div>
										<h4 className="font-semibold">E2E Tests</h4>
										<p className="text-xs text-gray-600">
											Mô phỏng user interactions
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="w-20 bg-gray-200 rounded-full h-2 mb-1">
										<div
											className="bg-orange-500 h-2 rounded-full"
											style={{ width: "75%" }}
										/>
									</div>
									<span className="text-xs font-semibold">75%</span>
								</div>
							</div>
						</div>

						<div className="bg-orange-100 p-4 rounded-lg">
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center">
									<span className="text-2xl mr-3">🔍</span>
									<div>
										<h4 className="font-semibold">Bug Detection</h4>
										<p className="text-xs text-gray-600">
											Phát hiện edge cases & errors
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="w-20 bg-gray-200 rounded-full h-2 mb-1">
										<div
											className="bg-orange-500 h-2 rounded-full"
											style={{ width: "80%" }}
										/>
									</div>
									<span className="text-xs font-semibold">80%</span>
								</div>
							</div>
						</div>
					</div>
				</Card>

				<div className="space-y-6">
					<Card className="bg-gray-800 text-white">
						<h3 className="text-xl font-bold mb-4">
							🚀 Testing Strategy với AI
						</h3>
						<div className="space-y-4">
							<div className="bg-gray-700 p-3 rounded">
								<div className="flex items-start">
									<span className="text-2xl mr-3">📝</span>
									<div>
										<p className="font-semibold text-sm">Test Planning</p>
										<p className="text-xs opacity-90">
											AI analyze requirements → generate test scenarios
										</p>
									</div>
								</div>
							</div>
							<div className="bg-gray-700 p-3 rounded">
								<div className="flex items-start">
									<span className="text-2xl mr-3">🤖</span>
									<div>
										<p className="font-semibold text-sm">Auto Generation</p>
										<p className="text-xs opacity-90">
											Generate test data, mocks, và assertions
										</p>
									</div>
								</div>
							</div>
							<div className="bg-gray-700 p-3 rounded">
								<div className="flex items-start">
									<span className="text-2xl mr-3">🔧</span>
									<div>
										<p className="font-semibold text-sm">Maintenance</p>
										<p className="text-xs opacity-90">
											Update tests khi code changes
										</p>
									</div>
								</div>
							</div>
						</div>
					</Card>

					<Card border={true} borderColor="border-orange-500">
						<h3 className="text-lg font-bold text-orange-800 mb-3">
							⚠️ Lưu Ý Quan Trọng
						</h3>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>• AI tốt cho happy path, cần human cho edge cases</li>
							<li>• Review test logic, đừng blind trust AI output</li>
							<li>• Combine AI với manual exploratory testing</li>
							<li>• Maintain test data quality cho AI training</li>
							<li>• AI test cần được test - avoid false confidence</li>
						</ul>
					</Card>
				</div>
			</div>
		</SlideLayout>
	);
};
