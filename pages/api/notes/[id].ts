import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    id: any;
    title: string;
    body: string;
};

export default function getNoteApi(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req);
    const { id } = req.query;
    res.status(200).json({
        id: id,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    });
}