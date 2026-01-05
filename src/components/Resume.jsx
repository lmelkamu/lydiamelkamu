import "../styles/Resume.css";
function Resume() {
    return (
        <main className="resume" id = "resume">
        <iframe
            className="resume-frame"
            src="/resume.pdf"
            title="Resume PDF"
        />
        </main>
    );
} export default Resume;