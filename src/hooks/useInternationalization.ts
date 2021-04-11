import { useContext } from 'react';
import InternationalizationContext from 'src/providers/Internationalization/context';

export default function useInternationalization() {
    return useContext(InternationalizationContext);
}
