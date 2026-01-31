import { portfolioData } from '../data/portfolio';

const Footer = () => {
    const { personal } = portfolioData;

    return (
        <footer className="py-12 px-4 border-t bg-muted/30 mt-20">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">{personal.name}</h3>
                        <p className="text-muted-foreground max-w-xs capitalize">{personal.title}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        {Object.entries(personal.links).filter(([key]) => key !== 'resume').map(([key, url]) => (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors capitalize text-sm font-medium"
                            >
                                {key === 'email' ? 'Contact' : key}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
                    <p className="mt-2 text-xs">Built with React, Tailwind CSS, and Passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
