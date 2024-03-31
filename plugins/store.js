export default defineNuxtPlugin(({ $pinia }) => {
    return {
        provide: {
            store: useGlobalStore($pinia),
        },
    };
});
