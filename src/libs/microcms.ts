import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY,
});

export const getBlogs = async ( queries: MicroCMSQueries ) => {
    return await client.get({ endpoint: "post", queries })
}

export const getBlogDetail = async (
    blogId: string,
    queries?: MicroCMSQueries
) => {
    return await client.getListDetail({
        endpoint: "post",
        contentId: blogId,
        queries
    })
}