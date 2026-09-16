import type { Route } from "./+types/home";
import { Search, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "@carbon/react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Bay Oaks U16G ECNL-RL Player Highlights" },
    { name: "description", content: "Highlights for players - add and view" },
  ];
}

export default function Home() {
  return (
    <div>
      <div
        style={{
          width: 800
        }}
      >
        <Search
          closeButtonLabelText="Clear search input"
          id="search-default-1"
          labelText="Site search"
          placeholder="Placeholder text"
          size="md"
          type="search"
        />
      </div>
      <div>
        <Table
          aria-label="sample table"
          size="lg"
        >
          <TableHead>
            <TableRow>
              <TableHeader>
                Name
              </TableHeader>
              <TableHeader>
                Rule
              </TableHeader>
              <TableHeader>
                Status
              </TableHeader>
              <TableHeader>
                Other
              </TableHeader>
              <TableHeader>
                Example
              </TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                Load Balancer 1
              </TableCell>
              <TableCell>
                Round robin
              </TableCell>
              <TableCell>
                Starting
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Load Balancer 2
              </TableCell>
              <TableCell>
                DNS delegation
              </TableCell>
              <TableCell>
                Active
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Load Balancer 3
              </TableCell>
              <TableCell>
                Round robin
              </TableCell>
              <TableCell>
                Disabled
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Load Balancer 4
              </TableCell>
              <TableCell>
                Round robin
              </TableCell>
              <TableCell>
                Disabled
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Load Balancer 5
              </TableCell>
              <TableCell>
                Round robin
              </TableCell>
              <TableCell>
                Disabled
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Load Balancer 6
              </TableCell>
              <TableCell>
                Round robin
              </TableCell>
              <TableCell>
                Disabled
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Load Balancer 7
              </TableCell>
              <TableCell>
                Round robin
              </TableCell>
              <TableCell>
                Disabled
              </TableCell>
              <TableCell>
                Test
              </TableCell>
              <TableCell>
                22
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

