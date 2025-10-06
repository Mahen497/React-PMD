import React from "react";

const Changes = () => (
	<div className="p-6 max-w-3xl mx-auto">
		<h2 className="text-2xl font-bold mb-4">Project Improvement Roadmap</h2>
		<ol className="list-decimal pl-6 space-y-4">
			<li>
				<strong>Add Backend Integration</strong>
				<ul className="list-disc pl-6">
					<li>Connect to a real backend (Node.js/Express, Firebase, etc.) for persistent data storage.</li>
					<li>Implement authentication (login/logout, user roles).</li>
				</ul>
			</li>
			<li>
				<strong>Enhance UI/UX</strong>
				<ul className="list-disc pl-6">
					<li>Add product images upload (with preview).</li>
					<li>Use modals for editing/adding products instead of inline forms.</li>
					<li>Add loading spinners and error messages for API calls.</li>
					<li>Improve mobile responsiveness and accessibility.</li>
				</ul>
			</li>
			<li>
				<strong>Advanced Features</strong>
				<ul className="list-disc pl-6">
					<li>Pagination or infinite scroll for large product lists.</li>
					<li>Sorting options (by price, category, etc.).</li>
					<li>Export product data (CSV, PDF).</li>
					<li>Dashboard analytics (charts for sales, categories).</li>
				</ul>
			</li>
			<li>
				<strong>Code Quality</strong>
				<ul className="list-disc pl-6">
					<li>Add unit and integration tests (Jest, React Testing Library).</li>
					<li>Use TypeScript for type safety.</li>
					<li>Refactor components for better reusability and separation of concerns.</li>
				</ul>
			</li>
			<li>
				<strong>Performance</strong>
				<ul className="list-disc pl-6">
					<li>Optimize images and assets.</li>
					<li>Use React.memo or virtualization for large lists.</li>
				</ul>
			</li>
			<li>
				<strong>Documentation & DevOps</strong>
				<ul className="list-disc pl-6">
					<li>Add API documentation.</li>
					<li>Set up CI/CD for automated testing and deployment.</li>
				</ul>
			</li>
		</ol>
	</div>
);

export default Changes;
