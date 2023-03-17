using {ui5.svelte as my} from '../db/schema';

service TimetrackingService {
    entity WorkItems as projection on my.WorkItems;
}
