export default function Header() {
    const logoSrc = './images/logo3.png'; // Using logo3.png as per the image
    const logoTextoSrc = './images/logo_texto.png'; // Added for the text logo

    return (
        <div className="card shadow-xl p-0 w-full max-w-6xl mx-auto"> {/* Added w-full max-w-6xl mx-auto */}
            <header className="text-white py-2 px-4 flex flex-col md:flex-row items-center md:justify-between rounded-lg">
                
                {/* Block B: Text Logo */}
                <div className="w-full md:w-auto order-1 md:order-2 flex-grow flex justify-center items-center px-2 md:px-4">
                    <img src={logoTextoSrc} alt="Biotik Texto" className="h-24 sm:h-28 md:h-32 w-auto inline-block" />
                </div>

                {/* Block A: Circular Logo */}
                <div className="hidden md:flex order-none md:order-1 flex-shrink-0 items-center justify-center" style={{ minWidth: '180px' }}>
                    <img src={logoSrc} alt="Biotik Logo" style={{ height: '160px', width: '160px', maxWidth: '180px', maxHeight: '180px' }} />
                </div>

                {/* Block C: Buttons */}
                <div className="order-2 md:order-3 flex items-center mt-4 md:mt-0 md:flex-shrink-0">
                    {/* Mobile Buttons - Visible only on <md screens, stacked */}
                    <div className="flex flex-col items-center gap-y-3 md:hidden">
                        <a
                            href="https://odk.biotico.cl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white rounded-lg px-1 py-1.5 font-semibold shadow hover:text-green-400 transition-colors duration-200 whitespace-nowrap text-xs leading-tight border-2 border-white"
                            style={{ boxSizing: 'border-box', minWidth: '100px', textAlign: 'center' }}
                        >
                            Administración
                        </a>
                        <a
                            href="https://gestion.biotik.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white rounded-lg px-1 py-1.5 font-semibold shadow hover:text-green-400 transition-colors duration-200 whitespace-nowrap text-xs leading-tight border-2 border-white"
                            style={{ boxSizing: 'border-box', minWidth: '100px', textAlign: 'center' }}
                        >
                            Gestión
                        </a>
                    </div>
                    {/* Desktop Buttons - Visible only on >=md screens, horizontal */}
                    <div className="hidden md:flex items-center gap-x-3">
                        <a
                            href="https://odk.biotico.cl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white rounded-lg px-1 py-1.5 font-semibold shadow hover:text-green-400 transition-colors duration-200 whitespace-nowrap text-xs md:text-sm leading-tight border-2 border-white"
                            style={{ boxSizing: 'border-box', minWidth: '100px', textAlign: 'center' }}
                        >
                            Administración
                        </a>
                        <a
                            href="https://gestion.biotik.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white rounded-lg px-1 py-1.5 font-semibold shadow hover:text-green-400 transition-colors duration-200 whitespace-nowrap text-xs md:text-sm leading-tight border-2 border-white"
                            style={{ boxSizing: 'border-box', minWidth: '70px', textAlign: 'center' }}
                        >
                            Gestión
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}
