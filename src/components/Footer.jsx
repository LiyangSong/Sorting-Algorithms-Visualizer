/**
 * A simple footer including project and contact information.
 * @author - Liyang
 * @returns {JSX.Element} - The rendered JSX Component.
 */
export default function Footer() {
    return(
        <div className="footer">
            <p>A Project Developed by Keke, Liyang, and Yue in Summer 2023.</p>
            <a
                href="mailto:song.liy@northeastern.edu"
                className="footer_contact"
            >
                Contact Us
            </a>
        </div>
  );
}
