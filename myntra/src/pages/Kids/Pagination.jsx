import { Box, Button } from "@chakra-ui/react";

function createArrayOfSize(n) {
    return new Array(n).fill(0);
}

function Pagination({ totalPages, currentPage, handlePageChange }) {
    var pages = createArrayOfSize(totalPages).map((a, i) =>
        <Button border={"1px solid blue"} variant={"ghost"} ml={"5px"} key={a + i + 1} disabled={currentPage === (a + i + 1)} onClick={() => handlePageChange(a + i + 1)}>{a + i + 1}</Button>
    );
    return <Box m={"auto"} w={"50%"} display="flex">{pages}</Box>;
};

export default Pagination;