import React, { useEffect } from 'react';

const VacanciesWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://api.hh.ru/widgets/vacancies/employer?employer_id=1601346&locale=RU&show_region=true";
        script.className = "hh-script";

        const widgetContainer = document.getElementById('hh-vacancies-widget');

        if (widgetContainer) {
            widgetContainer.appendChild(script);
        }

        return () => {
            if (widgetContainer) {
                widgetContainer.removeChild(script);
            }
        };
    }, []);

    return (
        <div>
            <div id="hh-vacancies-widget"></div> {/* Контейнер для виджета */}
        </div>
    );
};

export default VacanciesWidget;
