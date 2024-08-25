import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

export default({
    install(app) {
        const baseComponents = import.meta.glob("../components/base/*.vue", {
            eager: true
        });

        Object.entries(baseComponents).forEach(([path, module]) => {
            const componentName = camelCase(
                path
                    .split('/')
                    .pop()
                    .replace(/\.\w+$/, '')
            );
            console.log(path, componentName);
            app.component(`Base${upperFirst(componentName)}`, module.default);
        });
    }
});