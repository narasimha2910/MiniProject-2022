// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract Edurity is ReentrancyGuard, ERC721URIStorage {

    address public adminAddress;
    constructor() ERC721("Edurity", "EDT") {
        adminAddress = msg.sender; //working
    }
    
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private documentId;
    
    struct Record{
        uint256 fileId;
        address owner;    //Owner of the file, the one who calls the contract
        // mapping(address => uint256) status;
    }

    function getRecord(uint256 _recID)  public view returns(Record memory) {
        Record memory rec = idToDoc[_recID];
        return rec;
    }

        //Record: 123, u12idns clg0: 0, clg1: 1
    mapping(uint256 => Record) idToDoc;  //Record => verifiers => uint256
    mapping(uint256 => mapping(address=>uint256)) public verified;
    address[] public verifiers;  //add verifiers using becomeVerifiers functions
    mapping(address => uint256[]) ownedRecords; 

    // check if msg.sender in verifiers[] 
    // verified[Rec][ver-addr] = 0,1,2   0=pending, 1=true, 2=false
    //return verified[Rec][ver-addr] for each verifier

    /*function verify(Record rec) returns uint {
        for each verifier
            rec.status[verifier] = true;

    */
    function mintDocument(string memory documentURI) public returns (uint256) {
        // require(verifiers.length!=0, "There are no verifiers");
        documentId.increment();
        uint256 newDocId = documentId.current();
        _mint(msg.sender, newDocId);
        // set the token URI: id and url
        _setTokenURI(newDocId, documentURI);
        // mint the token and set it for sale - return the id to do so
        idToDoc[newDocId] = Record({fileId: newDocId,owner: msg.sender});
        for(uint i=0; i<verifiers.length; i++)
        {
            verified[newDocId][verifiers[i]] = 0;
        }
        //status[verifiers] = 0 while creating rec
        ownedRecords[msg.sender].push(newDocId);
        return newDocId;
    }

    function addVerifier(address _verifier) public {
        verifiers.push(_verifier);
    }

    function verifyDocument(uint256 _docId, uint256 _status) public {
        //check if msg.sender is in verifiers[]
        //check if verifier has already verified the doc i.e when verified = 1 or 2
        verified[_docId][msg.sender] = _status;
    }

    function getStatus(uint256 _recID) public view returns(uint256) {
        for(uint i=0; i<verifiers.length; i++)
        {
            if(verified[_recID][verifiers[i]] == 0)
            return 0; //pending
            else if(verified[_recID][verifiers[i]] == 2)
            return 2; //fail
        }
        return 1; //success
    }

    function getRecordsOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256[] memory returnDocIdsOfOwner = new uint256[](ownedRecords[_owner].length);
        for(uint i=0; i<ownedRecords[_owner].length;i++)
        {
            returnDocIdsOfOwner[i] = ownedRecords[_owner][i];
        } 
        return (returnDocIdsOfOwner);
    }

    //return docs of each person who uploaded
    /*function balanceOf(address owner) public view virtual override returns (uint256) {
        require(owner != address(0), "ERC721: address zero is not a valid owner");
        return _balances[owner];
    }*/


 //add all requires as modifiers

}
    