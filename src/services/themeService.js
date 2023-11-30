import {constants} from "@/constants";

export function getCurrentTheme() {
    return localStorage.getItem(constants.themeStoreKey);
}

export function setTheme(themeSlug) {
    localStorage.setItem(constants.themeStoreKey, themeSlug);
}
